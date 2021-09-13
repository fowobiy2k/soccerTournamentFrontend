import { Link } from 'react-router-dom';

const Options = () => {
    return (
        <div>
            <Link className='link'  to='/create'>Create new entity</Link>
            <Link className='link'  to='/manage'>Create new entity</Link>
        </div>
    )
}

export default Options
