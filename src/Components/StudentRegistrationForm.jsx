import React, { useState } from 'react';

function StudentRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Student Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">
              Student Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Age
            </label>

            <input
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your age"
              min="1"
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Select Course
            </label>

            <select
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setSubmitted(false);
              }}
              required
              className="w-full border border-gray-300 p-2 rounded-lg"
            >
              <option value="">Choose a course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Com">B.Com</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        {submitted && (
          <div className="mt-6 bg-green-50 border border-green-300 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Registration Successful!
            </h2>

            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Course:</strong> {course}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default StudentRegistrationForm;