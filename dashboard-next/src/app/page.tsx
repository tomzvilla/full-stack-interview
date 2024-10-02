export default function Home() {
  /*

    TODO: starting from this skeleton, build a dashboard to fullfill the use cases provided. The dashboard should be:
    - visually appealing (we don't expect anything fancy, but don't use plain text either)
    - clean and well-organized
    - easy to use

    Organize your code as you see fit.

  */

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">A better TODO system</h1>
          <div className="rounded-lg p-3">
            <p>TODO</p>
          </div>
        </div>
      </div>
    </main>
  );
}
