import SagaFormComponent from "@/components/SagaLayoutComponent/SagaLayoutComponent";

const Saga = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl text-center font-semibold mb-4 mt-4">
        Taming Forms with Redux Sagas: An Unconventional Dance of Actions and
        Effects
      </h2>
      <SagaFormComponent />
    </div>
  );
};

export default Saga;
