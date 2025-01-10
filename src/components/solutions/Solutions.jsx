import Card from '../reusableComponent/Card';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      {/* <button className='px-4 py-2 rounded outline mb-4' > Benefits</button> */}
      <button className="px-4 py-2 text-1xl rounded-full border text-gray-600 border-gray-300 shadow-md outline outline-1 outline-gray-200 mb-4">
  Benefits
</button>

      <h1 className='font-bold text-3xl'>Why Choose OprahTask?</h1>

      <div className='cardsComponent flex items-center justify-center space-x-5 mt-5'>
        <Card
        icon="fa-solid fa-lightbulb"
        title="Innovative Ideas"
        description="Unlock creative solution"
        />
        <Card
        icon="fa-solid fa-lightbulb"
        title="Innovative Ideas"
        description="Unlock creative solution"
        />
        <Card
        icon="fa-solid fa-lightbulb"
        title="Innovative Ideas"
        description="Unlock creative solution"
        />
      </div>
    </div>
  )
}

export default Solutions