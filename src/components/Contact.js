import React from 'react'

export default function Contacts() {
    return (
        <div>
            <h1>Let's build great things together</h1>
            <form>
                <label>Name</label>
                <input type="text" name="name" /><br/>
                <label>Email</label>
                <input type="email" name="email" /><br/>
                <label>Comapny(optional)</label>
                <input type="text" name="company" /><br/>
                <label>Phone number</label>
                <input type="phone" name="name" /><br/>
                <input type="submit" value="Submit" />
                <textarea/>
            </form>
        </div>
    )
}
