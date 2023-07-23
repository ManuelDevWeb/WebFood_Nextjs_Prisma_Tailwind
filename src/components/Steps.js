import { useRouter } from "next/router";

const steps = [
  { name: "Menú", url: "/" },
  { name: "Resumen", url: "/resumen" },
  { name: "Datos y Total", url: "/total" },
];

const Steps = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let valor;

    if (router.pathname === "/") {
      valor = 2.5;
    } else if (router.pathname === "/resumen") {
      valor = 47.3;
    } else {
      valor = 100;
    }

    return valor;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {steps.map((step, i) => (
          <button
            className="text-2xl font-bold"
            key={`${step.name}` + i}
            onClick={() => router.push(step.url)}
          >
            {step.name}
          </button>
        ))}
      </div>

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 h-2 w-10 text-center"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
    </>
  );
};

export { Steps };
