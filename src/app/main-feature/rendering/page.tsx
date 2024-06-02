import ReaderingSetting from "@/features/main-feature/components/RenderingSetting";
import RenderingTab from "@/features/main-feature/components/RenderingTab";

const Rendering = () => {
  return (
    <div className="py-12  minH-[92vh] bg-slate-200">
      <section id="csr-ssr-ssg" className="mb-32">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          CSR / SSR / SSG について
        </h2>
        <RenderingTab />
        <h2 className="text-4xl font-bold text-center mt-32 text-gray-800">
          NextJSでのレンダリングの設定方法
        </h2>
        <ReaderingSetting />
      </section>
    </div>
  );
};

export default Rendering;
