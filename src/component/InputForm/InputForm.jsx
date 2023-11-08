
import PropTypes from 'prop-types';

const InputForm = ({handleSearch,setSearch}) => {
    return (
        <div className="sm:flex my-5 justify-center">
        <form className="flex sm:flex-row sm:w-1/2 flex-col text-[#071952] rounded-lg items-center sm:border-2 border-[#0B666A] sm:gap-0 gap-4" onSubmit={handleSearch}>
              <input onChange={e=>setSearch(e.target.value)} type="text" name='search' className="sm:w-9/12 w-full py-3 px-2 sm:rounded-s-lg rounded-lg sm:rounded-none outline-none border-2 sm:border-none border-[#0B666A]" placeholder="Enter Job Title"/>
              <button type="submit" className="sm:w-3/12 w-1/2 inline-block btn sm:rounded-r-lg sm:rounded-s-none font-semibold bg-[#0B666A] text-white hover:bg-[#35A29F]">submit</button>
            </form>
        </div>
    );
};
InputForm.propTypes={
    handleSearch: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired

}
export default InputForm;