import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const Home = () => {
  return (
    <Card className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Welcome to Task Manager
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        A simple application to manage your tasks and demonstrate React skills
      </p>
      <div className="flex justify-center gap-4">
        <Button as="a" href="/tasks" variant="primary">
          Go to Task Manager
        </Button>
        <Button as="a" href="/api-demo" variant="secondary">
          API Demo
        </Button>
      </div>
    </Card>
  );
};