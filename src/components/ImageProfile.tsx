import UserIcon from '/public/icons/user.png'
import styled from 'styled-components';


const UserImage = styled.button`   
    grid-column: 5 / 6;
    justify-self: left;

    background: none;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }
`;


const ImageProfile = (props: any) => {

    return(
        <UserImage 
            style={{            
                backgroundImage: `url(${UserIcon.src})`,
                width: `${props.imgSize}px`,
                height: `${props.imgSize}px`,
                cursor: `${!props.noCursor ? 'pointer' : 'none'}`
            }}
            onClick={props.imgClick}
        ></UserImage>
    );
}

export { ImageProfile }


