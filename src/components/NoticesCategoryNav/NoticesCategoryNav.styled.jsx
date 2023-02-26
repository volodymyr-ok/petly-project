import styled from 'styled-components';
import { device } from '../../utils/mixin';


export const NavBox = styled.div`

      padding:28px 0 30px 0;
      ${device.tablet}{
        display: flex;
        padding: 40px 0 60px 0;
    }
`
export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    ${device.tablet}{
        width: 506px;
    }
    ${device.desktop}{
        flex-grow: 1;
    }
`
// export const NavPosition = styled.ul`
//     display: flex;
//     flex-wrap: wrap;
//     gap: 12px;
//     ${device.tablet}{
//         width: 506px;
//     }
//     ${device.desktop}{
//         flex-grow: 1;
//     }

// `
