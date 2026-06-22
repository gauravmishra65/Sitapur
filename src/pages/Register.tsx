// src/pages/Register.tsx
import RegisterStudentForm from '../components/auth/RegisterStudentForm';

export default function Register() {
  return (
    <div className="min-h-screen bg-cream flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <RegisterStudentForm />
      </div>
    </div>
  );
}
