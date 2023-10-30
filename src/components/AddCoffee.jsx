import './addCoffee.css'

export default function AddCoffee({ setCoffees }) {

const getCoffees = () => {
    fetch('https://first-deployed-api-c12.web.app/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
        .catch(alert)
        
}

const handleSubmit = (e) => {
    e.preventDefault()
    //gather form data
    // e.target is the form
    // e.target.name is the input "name"
    //e.target.name.value is the value of the input "name"
    const name = e.target.name.value
    const recipe = e.target.recipe.value
    const description = e.target.description.value
    //create coffee object
    const newCoffee = { name, recipe, description} //restructuring
    //POST new coffee obbject to the API
    fetch('https://first-deployed-api-c12.web.app/coffees', { 
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCoffee)
    })
        .then(res => res.json())
        .then(data => {
            //check if the message is "Success!"
            if(data.message === "Success!") {
                //our coffee was added successfuly
                //clear the form
                e.target.name.value = ''
                e.target.recipe.value ='' 
                e.target.description.value = ''
                //then, get updated list of coffees...
            }
        })
        .catch(alert)

        getCoffees()
}

    return (
        <section className="coffee-form">
            <h2>Add a Coffee</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" name="name" />
                </label>

                <label htmlFor="recipe">
                    Recipe:
                    <input type="text" name="recipe" />
                </label>

                <label htmlFor="description">
                    Description:
                    <input type="text" name="description" />
                </label>

                <input type="submit" value="Add" className='add-btn' />
                
            </form>
        </section>
    )
}