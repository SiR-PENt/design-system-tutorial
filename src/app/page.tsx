import Button from "./components/Button"

export default function Home() {
  return (
    <main className="border pt-20 pl-20">
      <Button intent="primary" text='Create'/> <br/> <br/>   
      <Button intent="secondary" text='Update'/>  <br/> <br/>  
      <Button intent="danger" text='Delete'/>  <br/> <br/>  
    </main>
  )
}
