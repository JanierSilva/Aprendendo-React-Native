import topo from '../../assets/topo.png';
import logoVendedor from '../../assets/logo.png';
import antena2g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import node from '../../assets/Itens/nodeMcu.png';
import fontBox from '../../assets/Fotos2/fonteBox.png';
import placaMae from '../../assets/Fotos2/placaMae.png';
import placaVideo from '../../assets/Fotos2/placaVideo.png';
import processador from '../../assets/Fotos2/processador.png';

const carrinho = {
    topo:{
        titulo:"Carrinhos",
        imagem: topo,
    },
    detalhes:{
        titulo:"Detalhes do Carrinho",
        tituloProduto:"Kit IoT",
        descricao:"Kit IoT que revoluciona a vida dos estudantes",
        logoVendedor:logoVendedor ,
        nomeVendedor:"Nuvem Cloud Shopping",
        preco:"R$ 101,00",
    },
    itens:{
        titulo:"ITENS DO CARRINHO",
        lista:[
            {
                nome:"Antena 2g/3g",
                imagem: antena2g ,
            },
            {
                nome:"Antena Wifi",
                imagem: antenaWifi,
            },
            {
                nome:"Modem",
                imagem: modem,
            },
            {
                nome:"Node MCU",
                imagem: node,
            },
        ],
    
    },
    itens2:{
        titulo2:"PEÇAS PARA PC",
        lista:[
            {
                nome:"Fonte Box",
                imagem: fontBox ,
            },
            {
                nome:"Placa Mãe",
                imagem: placaMae,
            },
            {
                nome:"Placa de Vídeo",
                imagem: placaVideo,
            },
            {
                nome:"Processador",
                imagem: processador,
            },
            
        ]

    },
    
    }


export default carrinho;