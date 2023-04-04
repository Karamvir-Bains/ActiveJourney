import Dashboard from "./_dashboard";
import Header from "./_header";

export default function Main() {
  return(
    <main id="section-main" className="bg-slate-100 relative mx-auto w-full max-w-200 overflow-auto">
      <div className="flex h-full w-full flex-col p-8">
        <Header />
        <Dashboard />
      </div>
    </main>
  );
};