import { useUser } from '@/context/auth';

const HomeView = () => {
  const { user } = useUser();
  return (
    <div className="container mx-3 md:mx-auto">
      <div className="bg-light mt-3 py-5 rounded">
        <h1>Dashboard</h1>
        <div>Welcome Home, {user?.displayName}</div>
      </div>
    </div>
  );
};

export default HomeView;
