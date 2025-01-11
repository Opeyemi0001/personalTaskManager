import Card from '../reusableComponent/Card';
import './Solutions.css';

const Solutions = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      {/* <button className='px-4 py-2 rounded outline mb-4' > Benefits</button> */}
      <button className="px-4 py-2 text-1xl rounded-full border text-gray-600 border-gray-300 shadow-md outline outline-1 outline-gray-200 mb-4">
  Benefits
</button>

      <h1 className='font-bold text-3xl mb-5'>Why Choose OprahTask?</h1>

      <div className='cardsComponent flex items-center justify-center space-x-5 mt-5 mb-20'>
        <Card
        icon="fa-solid fa-signal"
        title="Boost Productivity"
        description="Get more done in less time with streamline task flows that simplify project management and enhance team efficiency."
        />
        <Card
        icon="fa-solid fa-table-columns"
        title="Stay Organized"
        description="Centerlize your tasks, projects, and communication in one intuitive deashboard to maintain clarity focus."
        />
        <Card
        icon="fa-solid fa-globe"
        title="Work Anywhere"
        description="Access your project seamlessly from desktop, mobile, or tablet empowering you to stay connected on the go"
        />
      </div>
    </div>
  )
}

export default Solutions