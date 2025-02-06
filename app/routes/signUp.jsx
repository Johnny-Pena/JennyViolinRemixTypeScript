import SignUpScript from '../components/SignUpScript';

export const meta = () => {
  return [
    { title: 'Jenny Peña Music | Sign Up' },
    { description: 'Sign Up for Lessons' }
  ];
};

export default function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center bg-base-200 mt-14">
            <SignUpScript />
        </div>
    );
}