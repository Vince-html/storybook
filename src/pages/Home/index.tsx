interface HomeProps {
  children: React.ReactNode;
}

const Home = ({ children }: HomeProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        height: '100vh'
      }}
    >
      {children}
    </div>
  );
};

export default Home;
