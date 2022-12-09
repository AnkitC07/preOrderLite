import React, { useState } from 'react'
import SubRow from './SubRow'
import Switchbutton from '../../common/Switchbutton'
// import image from "../HomePage"
import image from '../../../../public/profile.jpeg'
import { Button } from '@shopify/polaris'
import ModalProduct from '../../layouts/ModalProduct'
import EditModal from './EditModal'
import EditTab from './EditTab'
const DataTableRow = ({ data }) => {

  const [showV, setVariant] = useState(false)
  const [className, setClassName] = useState({ 'active': false, 'class': "fa-solid fa-chevron-down" })
  const [activeModal, setActiveModal] = useState(false)


  const checking = () => {
    setVariant(!showV)
    if (className.active) {
      setClassName({ 'active': false, 'class': "fa-solid fa-chevron-down" })
    } else {
      setClassName({ 'active': true, 'class': "fa-solid fa-chevron-up" })
    }

  }



  // console.log(data.image.src)
  return (
    <>
      <tr>
        <td>
          <button
            onClick={checking}
            className={className.class}>
          </button>
          <div className="image-main">
            <img src={data.image == null ? image : data.image.src} alt="product" style={{ height: "45px", width: "50px" }} />
          </div>
          <strong>{data.title}</strong>
        </td>
        <td>
          <div className="switch">
            <Switchbutton variants={data.variants[0]} />
          </div>
        </td>
        <td>
          <div className="editButton">
            <Button onClick={() => {
              setActiveModal(!activeModal)
            }}><i class="fas fa-cog text-muted" ></i></Button>
          </div>
        </td>
      </tr>
      {showV === true ?
        <SubRow data={data} />
        :
        null}
      <div className="dataTable_Edit">
        <ModalProduct comp={<EditTab />} active={activeModal} setActive={setActiveModal} title={'Product Settings'} />
      </div>
    </>
  )
}

export default DataTableRow