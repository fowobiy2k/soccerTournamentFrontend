import React from 'react'

const CreateEdition = () => {

    const submitForm = async (e) => {

        e.preventDefault();

        let myForm = document.getElementById('editionForm')

        let response = await fetch('/edition/createnew', {
            method: 'POST',
            body: new FormData(myForm)
        });

        console.log('hello1')

        myForm.reset()

        let result = await response.json();
        console.log('hello2')
        alert(result.message);
    }

    return (
        <div className='ctrl-grid'>
            <form id='editionForm' onSubmit={submitForm}>
                <fieldset>
                    <legend>Create New Edition</legend>
                    <label htmlFor='theme'>Theme: </label>
                    <input type="text" id='theme' name='theme' required /> <br />
                    <label htmlFor='year'>Year: </label>
                    <input type="text" id='year' name='year' required /><br />
                    <input type="submit" value='Create Edition' />
                </fieldset>
            </form>
        </div>
    )
}

export default CreateEdition
