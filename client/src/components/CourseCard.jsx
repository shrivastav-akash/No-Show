import React from 'react';
import { FaEdit, FaTrash, FaCheck, FaTimes, FaUserClock } from 'react-icons/fa';
import './CourseCard.css';

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
    <div className="card course-card-wrapper">
      <div className="status-bar" style={{ background: isSafe ? '#10b981' : '#ef4444' }}></div>
      
      <div className="course-header">
        <div>
          <h3 className="course-title">{name}</h3>
          <span className="course-code">{code}</span>
        </div>
        <div className="attendance-stats">
           <span className="attendance-percentage" style={{ color: isSafe ? '#10b981' : '#ef4444' }}>
             {attendancePercentage}%
           </span>
           <div className="target-percentage">Target: {minAttendance}%</div>
        </div>
      </div>

      <div className="status-section">
        <p className="status-message" style={{ color: statusColor }}>{statusMsg}</p>
        <div className="stats-row">
          <span>Attended: {attendedClasses}</span>
          <span>Total: {totalClasses}</span>
        </div>
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${Math.min(attendancePercentage, 100)}%`, background: isSafe ? '#10b981' : '#ef4444' }}></div>
        </div>
      </div>

      <div className="actions-grid">
        <button onClick={handleAttend} className="btn action-btn attend-btn">
          <FaCheck /> Attend
        </button>
        <button onClick={handleSkip} className="btn action-btn skip-btn">
          <FaTimes /> Skip
        </button>
        <button onClick={handleOD} className="btn action-btn od-btn">
          <FaUserClock /> OD
        </button>
      </div>

      <div className="edit-actions">
         <button onClick={() => onEdit(course)} className="btn icon-action-btn edit-btn">
           <FaEdit />
         </button>
         <button onClick={() => onDelete(_id)} className="btn icon-action-btn delete-btn">
           <FaTrash />
         </button>
      </div>
    </div>
  );
};

export default CourseCard;
