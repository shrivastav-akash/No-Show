import React from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes, FaUserClock } from 'react-icons/fa';

const CourseCard = ({ course, onUpdate, onDelete, onEdit }) => {
  const { _id, name, code, totalClasses, attendedClasses, minAttendance } = course;
  
  const attendancePercentage = totalClasses === 0 ? 100 : ((attendedClasses / totalClasses) * 100).toFixed(2);
  const isSafe = attendancePercentage >= minAttendance;

  // Calculation Logic
  // How many more classes to attend to reach target?
  // (attended + x) / (total + x) >= target/100
  // attended + x >= (total + x) * target
  // attended + x >= total*target + x*target
  // x(1 - target) >= total*target - attended
  // x >= (total*target - attended) / (1 - target)
  
  // How many classes can I skip?
  // attended / (total + x) >= target/100
  // attended >= (total + x) * target
  // attended/target >= total + x
  // x <= attended/target - total

  const target = minAttendance / 100;
  let statusMsg = '';
  let statusColor = '';

  if (isSafe) {
    const classesToSkip = Math.floor(attendedClasses / target - totalClasses);
    if (classesToSkip > 0) {
      statusMsg = `You can skip ${classesToSkip} classes.`;
      statusColor = 'var(--accent-color)';
    } else {
      statusMsg = 'On track. Don\'t skip any.'; // Can happen if exactly on boundary or slightly above but not enough for full integer skip
      statusColor = '#10b981';
    }
  } else {
    // Need to attend
    // x = (total*target - attended) / (1 - target)
    // Avoid division by zero if target is 1 (100%)
    if (target >= 1) {
       const needed = totalClasses - attendedClasses; // Actually this logic fails if target is 100%. 
       // If target is 100%, you can never recover if you missed one.
       statusMsg = "Attendance cannot be recovered.";
       statusColor = '#ef4444';
    } else {
        const classesToAttend = Math.ceil((totalClasses * target - attendedClasses) / (1 - target));
        if (classesToAttend > 0) {
            statusMsg = `Attend next ${classesToAttend} classes.`;
            statusColor = '#ef4444';
        } else {
            statusMsg = "On track."; // Should be covered by isSafe check above
             statusColor = '#10b981';
        }
    }
  }

  const handleAttend = () => {
    onUpdate(_id, { attendedClasses: attendedClasses + 1, totalClasses: totalClasses + 1 });
  };

  const handleSkip = () => {
    onUpdate(_id, { totalClasses: totalClasses + 1 });
  };

  const handleOD = () => {
    // OD adds to attended but NOT to total (as per request: "add one class count to attended class, not to total classes so far")
    // Wait, if it doesn't add to total, then mathematically percentage goes up significantly.
    // Example: 8/10 (80%). OD -> 9/10 (90%). Correct.
    onUpdate(_id, { attendedClasses: attendedClasses + 1 });
  };

  return (
    <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: isSafe ? '#10b981' : '#ef4444' }}></div>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{name}</h3>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{code}</span>
        </div>
        <div style={{ textAlign: 'right' }}>
           <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: isSafe ? '#10b981' : '#ef4444' }}>
             {attendancePercentage}%
           </span>
           <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Target: {minAttendance}%</div>
        </div>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{ margin: '0 0 0.5rem', fontWeight: '500', color: statusColor }}>{statusMsg}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <span>Attended: {attendedClasses}</span>
          <span>Total: {totalClasses}</span>
        </div>
        {/* Progress Bar */}
        <div style={{ width: '100%', height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', marginTop: '0.5rem', overflow: 'hidden' }}>
          <div style={{ width: `${Math.min(attendancePercentage, 100)}%`, height: '100%', background: isSafe ? '#10b981' : '#ef4444', transition: 'width 0.3s ease' }}></div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={handleAttend} className="btn" style={{ background: '#d1fae5', color: '#065f46', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
          <FaCheck /> Attend
        </button>
        <button onClick={handleSkip} className="btn" style={{ background: '#fee2e2', color: '#991b1b', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
          <FaTimes /> Skip
        </button>
        <button onClick={handleOD} className="btn" style={{ background: '#e0e7ff', color: '#3730a3', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
          <FaUserClock /> OD
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
         <button onClick={() => onEdit(course)} className="btn" style={{ padding: '0.4rem', color: 'var(--text-primary)', background: 'rgba(128, 128, 128, 0.2)' }}>
           <FaEdit />
         </button>
         <button onClick={() => onDelete(_id)} className="btn" style={{ padding: '0.4rem', color: '#ef4444' }}>
           <FaTrash />
         </button>
      </div>
    </div>
  );
};

export default CourseCard;
