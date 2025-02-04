import SignUpScript from '../components/SignUpScript';

export const meta = () => {
  return [
    { title: 'Jenny Peña Music | Sign Up' },
    { description: 'Sign Up for Lessons' }
  ];
};

export default function SignUp() {
    return (
        <div>
            <SignUpScript />
        </div>
    );
}