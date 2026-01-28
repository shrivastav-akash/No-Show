import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import AddCourseModal from '../components/AddCourseModal';
import ConfirmationModal from '../components/ConfirmationModal';
import Footer from '../components/Footer';
import api from '../utils/api';
import { FaPlus, FaSadTear } from 'react-icons/fa';

const Dashboard = ({ toggleTheme, theme }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  
  // Delete Modal State
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  const fetchCourses = async () => {
    try {
      const res = await api.get('/courses');
      setCourses(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleCreateOrUpdate = async (courseData) => {
    try {
      if (editingCourse) {
        const res = await api.put(`/courses/${editingCourse._id}`, courseData);
        setCourses(courses.map(c => c._id === res.data._id ? res.data : c));
      } else {
        const res = await api.post('/courses', courseData);
        setCourses([res.data, ...courses]);
      }
      setIsModalOpen(false);
      setEditingCourse(null);
    } catch (err) {
      console.error(err);
      alert('Failed to save course');
    }
  };

  const handleUpdateStats = async (id, changes) => {
    try {
      const res = await api.put(`/courses/${id}`, changes);
      setCourses(courses.map(c => c._id === id ? res.data : c));
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = (id) => {
    setCourseToDelete(id);
    setDeleteModalOpen(true);
  };

  const executeDelete = async () => {
    if (!courseToDelete) return;
    try {
      await api.delete(`/courses/${courseToDelete}`);
      setCourses(courses.filter(c => c._id !== courseToDelete));
      setDeleteModalOpen(false);
      setCourseToDelete(null);
    } catch (err) {
      console.error(err);
    }
  };

  const openEditModal = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column' }}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      
      <main className="container" style={{ padding: '2rem 1rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.75rem', margin: 0 }}>My Courses</h2>
          <button 
            onClick={() => { setEditingCourse(null); setIsModalOpen(true); }}
            className="btn btn-primary" 
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <FaPlus /> Add Course
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>Loading courses...</div>
        ) : courses.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
            <FaSadTear style={{ fontSize: '3rem', marginBottom: '1rem' }} />
            <p style={{ fontSize: '1.2rem' }}>No courses added yet. Start tracking your attendance!</p>
          </div>
        ) : (
          <div className="course-grid">
            {courses.map(course => (
              <CourseCard 
                key={course._id} 
                course={course} 
                onUpdate={handleUpdateStats}
                onDelete={confirmDelete}
                onEdit={openEditModal}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />

      {isModalOpen && (
        <AddCourseModal 
          onClose={() => { setIsModalOpen(false); setEditingCourse(null); }} 
          onSave={handleCreateOrUpdate}
          initialData={editingCourse}
        />
      )}

      <ConfirmationModal 
        isOpen={deleteModalOpen}
        title="Delete Course"
        message="Are you sure you want to delete this course? This action cannot be undone."
        onConfirm={executeDelete}
        onCancel={() => { setDeleteModalOpen(false); setCourseToDelete(null); }}
      />
    </div>
  );
};

export default Dashboard;
