import UserIcon from '/public/icons/user.png'
import styled from 'styled-components';
import Image from "next/image";


const UserImage = styled(Image)`   
    grid-column: 5 / 6;
    justify-self: left;
    border-radius: 50%;
    width: 54px;
    height: 54px;
    object-fit: cover;
    border: none;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 38px;
        height: 38px;
    }
`;


const ImageProfile = (props: any) => {

    return(
        <>
            <UserImage 
                style={{            
                    backgroundImage: `${props.profile}`,
                    cursor: `${!props.noCursor ? 'pointer' : 'none'}`
                }}
                src={props.profile}
                alt="Example" 
                width={34} 
                height={34}
                onClick={props.imgClick}
            ></UserImage>
        </>
    );
}

export { ImageProfile }


