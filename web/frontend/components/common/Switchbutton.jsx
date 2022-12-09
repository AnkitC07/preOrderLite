
// import { checkDEV } from '@apollo/client/utilities/globals'
import { Frame, Page, Toast } from '@shopify/polaris'
import React, { useCallback, useState } from 'react'
import { useEffect } from 'react'
import Switch from 'react-switch'
// import { endPoint } from '../../utils'

const Switchbutton = ({ variants }) => {
	const [checked, setChecked] = useState(true)
	const [preorder, setPreorder] = useState(false)
	const [className, setClassName] = useState({ 'active': preorder, 'class': "preorder-text-red" })
	const [toast, setToast] = useState(false);

	//   console.log(variants)



	useEffect(() => {
		if (variants.inventory_quantity <= 0) {
			setPreorder(true)
			if (className.active) {
				setClassName({ 'active': true, 'class': "preorder-text-red" })
			} else {
				setClassName({ 'active': false, 'class': "preorder-text-green" })
			}
		}
	}, [])
	const setId = async (flag) => {
		console.log("setid: ", flag)
		if (preorder == true) {
			let newData = {
				id: variants.id,
				flag: flag
			}

			const options = {
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newData)
			};

			await fetch(`${endPoint}/button`, options).then((res) => res.json()).then((data) => { setToast(true); console.log(data); }).catch((error) => { console.log(error); });
		}
	}


	//Switch Changes
	const handleChange = async () => {
		setChecked(!checked)
		if (checked) {
			console.log(checked)
			setId(1)
		}
		else {
			console.log(checked)
			setId(0)
		}

	}


	const toggleActive = useCallback(() => setToast((toast) => !toast), []);

	const toastMarkup = toast ? (
		<Toast content="Updated" onDismiss={toggleActive} />
	) : null;

	return (
		<>
			<Switch checkedIcon={false} uncheckedIcon={false} onColor="#006e52" onChange={handleChange} checked={!checked} />
			<div className='preorder-text'>
				{preorder ? <p className={className.class}>Pre order is Enabled</p> : <p className={className.class}>Pre order is Disabled</p>}
			</div>
			<div style={{ height: "0" }} >
				<Frame>
					{toastMarkup}
				</Frame>
			</div>
		</>
	)
}

export default Switchbutton