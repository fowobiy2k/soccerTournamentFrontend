import React from 'react'


const CreateTeam = ({ onSubmit }) => {

    let destURL = '/modifyedition/teamcreation'
    let formId = 'teamCreationForm'

    return (
        <div className='ctrl-grid'>
            <form id='teamCreationForm' onSubmit={ (e) => onSubmit( e, formId, destURL )}>
                <fieldset>
                    <legend>Create New Team</legend>
                    <label for='name'>Team name: </label>
                    <input type="text" id='name' name='name' required/> <br />


                    <input type="submit" value='Create Team' />
                </fieldset>
            </form>
        </div>
    )
}

export default CreateTeam
