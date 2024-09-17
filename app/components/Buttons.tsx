import React from 'react'

const Buttons = (props: { onChange: (arg0: any) => void; id: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; active: any }) => {

    const handleClick = (keyId: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactPortal | Promise<React.AwaitedReactNode> | Iterable<React.ReactNode> | null | undefined) => {
        props.onChange(keyId)
    }

    return (
        <button
            onClick={() => { props.id == props.active? null : handleClick(props.id)}}
            className={`btn rounded-2xl ${props.active === props.id ? "active btn-accent" : "btn-outline "}`}
        >
            {props.id}
        </button>
        // <div class="gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 overflow-x-scroll">
        // </div>
    )
}

export default Buttons
