import header from '@/../images/homeHeader.svg';

export default function HomeHeader() {
    return (
            <div
                style={{
                    backgroundImage: `url(${header})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '640px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'center',
                }}
            >
                <div className="w-[200px] h-[200px] bg-white"></div>
            </div>
    );
}
