

const Tour = (props) => {
  return (
    <div className=' h-[500px] w-[300px] shadow-xl m-4 '>
        <img className='w-[300px] h-[200px] ' alt="tour-img" src={props.img}/>
        <h1>{props.name}</h1>
        <p>{props.par}</p>
    </div>
  )
}

export default Tour