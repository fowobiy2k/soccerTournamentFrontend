import React from 'react'

const submitForm = async (e) => {

    e.preventDefault();

    let myForm = document.getElementById('playerCreationForm')

    let response = await fetch('/modifyedition/createplayer', {
        method: 'PUT',
        body: new FormData(myForm)
    });

    console.log('hello1')

    myForm.reset()

    
}

const CreatePlayer = () => {
    return (
        <div className='ctrl-grid'>
            <form id='playerCreationForm' onSubmit={submitForm}>
                <fieldset>
                    <legend>Create New Player</legend>
                    <label for='firstname'>Firstname: </label>
                    <input type="text" id='firstname' name='firstName' required/> <br />

                    <label for='lastname'>Lastname: </label>
                    <input type="text" id='lastname' name='lastName' required/><br />

                    <label for='teamName'>Team: </label>
                    <input type="text" id='teamName' name='teamName' required/><br />

                    <label for='dateOfBirth'>Date of birth: </label>
                    <input type="date" id='dateOfBirth' name='dateOfBirth' required/><br />

                    <label for='position'>Position: </label>
                    <input type="text" id='position' name='position' required/><br />

                    <label for='weight'>Weight: </label>
                    <input type="text" id='weight' name='weight' /><br />

                    <input type="submit" value='Create Player' />
                </fieldset>
            </form>
        </div>
    )
}

export default CreatePlayer
