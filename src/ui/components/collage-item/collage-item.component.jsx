import './collage-item.component.styles.css'
export function CollageItem({ rotate, image, type }) {
    return (
        <div style={{
            transform: `rotate(${rotate}deg)`
        }} className={`div-collage div-collage-${type}`}>
            <div style={{
                backgroundImage: `url(${image})`
            }} className='div-collage-item-image'></div>
        </div>
    )
}