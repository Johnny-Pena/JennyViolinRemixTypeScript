import BioComp from '../components/BioComp';
export const meta = () => {
  return [
    { title: 'Jenny Peña Music | Bio' },
    { description: 'Welcome to Jenny Peña Music' }
  ];
};

export default function Bio() {
  return (
      <BioComp />
  );
}