import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from './Components/Header/Header';
import MasonryLayout from './Components/MasonryLayout/MasonryLayout';
import ContainerCard from './Components/ContainerCard/ContainerCard';
import Dropdown from './Components/Elements/Dropdown/Dropdown';

// import json files 
import images from "./Jsons/Images.json"

// App component
const App = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "AI Girl Images",
      active: true
    },
    {
      id: 2,
      title: "AI Blonde Girls",
      active: false
    },
    {
      id: 3,
      title: "AI Girlfriends",
      active: false
    },
    {
      id: 4,
      title: "AI Sext Chat",
      active: false
    },
    {
      id: 5,
      title: "AI Nude",
      active: false
    }
  ]

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [ ...images.categories[categoryChoose] ]
    })
  }

  return (
    <>
        <Header />
        <div className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                <h1>All images</h1>
                <Dropdown title="All Images" items={ddItems} liftingDdTextUp={takeDdTitle} />
              </div>
              <MasonryLayout images={categoryImage} />
          </ContainerCard>
        </div>
    </>
  )
}

export default App