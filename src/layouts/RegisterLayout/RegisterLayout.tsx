import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

interface Props {
  children?: React.ReactNode;
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}