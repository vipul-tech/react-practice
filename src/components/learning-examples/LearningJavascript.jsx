const person = {
    name : 'Vivek Kumar',
    age : 24,
    address : {
        line : 123,
        city : 'Mumbai',
        country : 'India'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavascript() {
    return (
      <>
        <div>{person.name}</div>
        <div>{person.age}</div>
        <div>{person.address.country}</div>
        <div>{person.profiles[0]}</div>
        <div>{ person.printProfile() }</div>
      </>
    );
  }