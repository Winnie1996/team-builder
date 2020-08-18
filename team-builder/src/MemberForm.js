import React from 'react'

function MemberForm(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div>
                <h2>Member Registration</h2>
            </div>
            
            <div className='form-group inputs'>
                    <input
                        leader='nameInput'
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        maxLength='20'
                        value={values.name}
                        onChange={onChange}
                    />
                    <br></br><br></br>
                    <input
                        id='emailInput'
                        name='email'
                        type='email'
                        placeholder='Enter email'
                        maxLength='20'
                        value={values.email}
                        onChange={onChange}
                    />
                    <br></br><br></br>
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>Select a role</option>
                    <option value='student'>Backend</option>
                    <option value='instructor'>FrontEnd</option>
                    <option value='tl'>Full Sack Web</option>
                    <option value='tl'>Developer</option>
                </select>
                <div>
                    <button enabled={!values.username || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form>

    )
}

export default MemberForm;