import React, {useRef, useEffect, useMemo} from 'react'

function ProductImage(props){
    const {url} = props
    const imageRef = useRef(null)
    const canvasRef = useRef(null)
    let mouse = {x: 0, y: 0, isActive: false}
    let radius = 25

    useEffect(() => {
        if(imageRef && imageRef.current){
            imageRef.current.addEventListener("mousemove", handleMouseMove)
            imageRef.current.addEventListener("mouseout", handleMouseOut)
        }
		return () => {
            if(imageRef && imageRef.current){
                imageRef.current.removeEventListener("mousemove", handleMouseMove)
                imageRef.current.removeEventListener("mouseout", handleMouseOut)
            }
        }  
	}, []) 

    const handleMouseMove = (e) => {
        const rect = imageRef.current?.getBoundingClientRect()
        mouse = {
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top, 
            isActive: true
        }
        handleImageBox()
    }
    const handleMouseOut = (e) => {
        mouse = {x: 0, y: 0, isActive: false}
        handleImageBox()
    }

    const handleGetBox = () => {
        return {
          left: mouse.x - radius,
          top: mouse.y - radius,
          width: radius * 2,
          height: radius * 2,
        }
    }

    const handleImageBox = () => {
        if(canvasRef && canvasRef.current && imageRef && imageRef.current) {
            const ctx = canvasRef.current.getContext("2d")
            if (ctx && mouse.isActive) {
                const { left, top, width, height } = handleGetBox()
                const imageRatio = imageRef.current.naturalWidth / imageRef.current.width
                canvasRef.current.style.display = mouse.isActive ? "block" : "none"
                ctx.drawImage(
                    imageRef.current,
                    left * imageRatio,
                    top * imageRatio,
                    width * imageRatio,
                    height * imageRatio,
                    0,
                    0,
                    canvasRef.current.width,
                    canvasRef.current.height
                )
            } else {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
                canvasRef.current.style.display = mouse.isActive ? "block" : "none"
            }
        }
    }

    function handleClick(){
        if(props.handleClick && typeof props.handleClick === "function"){
            props.handleClick()
        }
    }

    return <div className="product_image_box">
        <img ref={imageRef} src={url} alt="product_image" onClick={()=>handleClick()}/>
        <canvas ref={canvasRef} className="canvas_image" />
    </div>
}

export default ProductImage