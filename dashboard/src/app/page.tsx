import TodoList from "@/app/ui/todos/todo-list";

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <TodoList />
      </div>
    </main>
  );
}