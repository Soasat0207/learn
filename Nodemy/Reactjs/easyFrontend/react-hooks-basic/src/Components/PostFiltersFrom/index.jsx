import React ,{useState,useRef} from 'react'
import PropTypes from 'prop-types'

const PostFiltersForm = props => {
    const {onSubmit} = props;
    const [searchTerm,setSearchTerm] = useState('');
    const typingTimeoutRef =useRef(null)
    const handleSearchTermChange = (e)=>{
        setSearchTerm(e.target.value)
        if(!onSubmit) return;
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(()=>{
            const formValues = {
                searchTerm: e.target.value,
            };
            onSubmit(formValues);
        },300)
        
    }
    return (
        <form>
            <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            />
        </form>
    )
}

PostFiltersForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default PostFiltersForm
