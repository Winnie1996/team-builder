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
                 <label>Leader Name:&nbsp;
                    <input
                        value={values.name}
                        leader='name'
                        type='text'
                        placeholder='Enter Leader Name'
                        maxLength='20'
                        onChange={onChange}
                    />
                    </label>
                    <br></br><br></br>
                    <label>Student Name:&nbsp;
                    <input
                        value={values.name}
                        name='name'
                        type='text'
                        placeholder='Enter Name'
                        maxLength='20'
                        
                        onChange={onChange}
                    />
                    </label>
                    <br></br><br></br>
                    <label>Email:&nbsp;
                    <input
                        value={values.email}
                        name='email'
                        type='text'
                        placeholder='Enter Email'
                        maxLength='20'
                        onChange={onChange}
                    />
                    </label>

                    <br></br><br></br>
                    <label>Course:&nbsp;
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>Select a role</option>
                    <option value='student'>Backend</option>
                    <option value='instructor'>FrontEnd</option>
                    <option value='tl'>Full Stack Web Developer</option>
                    <option value='tl'>IOS</option>
                    <option value='tl'>Data Science</option>
                </select>
                </label>
                <div>
                    <button enabled={!values.username || !values.email || !values.role}>Submit</button>
                </div>
            </div>
        </form>

    )
}

export default MemberForm;