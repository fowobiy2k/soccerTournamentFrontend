import React from 'react'

const CreateMatch = ({ onSubmit, teams }) => {

    let destURL = '/modifyedition/createfixture'
    let formId = 'matchCreationForm'

    return (
        <div className='ctrl-grid'>
            <form id='matchCreationForm' onSubmit={(e) => onSubmit(e, formId, destURL)}>
                <fieldset>
                    <legend>Create New Fixture</legend>

                    <label for="homeTeamName">Select home team:</label>
                    <select name="homeTeamName" id="homeTeamName">
                        <option value="">Select</option>
                        {teams && teams.map(team => {
                            return <option key={team.id + 'j'} value={team.name}>{team.name}</option>
                        })}
                    </select> <br />

                    <label for="awayTeamName">Select away team:</label>
                    <select name="awayTeamName" id="awayTeamName">
                        <option value="">Select</option>
                        {teams && teams.map(team => {
                            return <option value={team.name}>{team.name}</option>
                        })}
                    </select> <br />

                    <label for="stage">Stage:</label>
                    <select name="stage" id="stage">
                        <option value="">Select</option>
                        <option value="First Round">First Round</option>
                        <option value="Semi Finals">Semi Finals</option>
                        <option value="Final">Final</option>
                    </select> <br />

                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" />

                    <label htmlFor="matchNumber">Match Number: </label>
                    <input type="text" cols='5' name="matchNumber" />

                    <label htmlFor="matchdate">Time: </label>
                    <input type="date" name="matchDate" /> <br />

                    <label htmlFor="matchtime">Time: </label>
                    <input type="time" name="matchTime" /> <br />

                    <input type="submit" value='Create Match' />
                </fieldset>
            </form>
        </div>
    )
}

export default CreateMatch
