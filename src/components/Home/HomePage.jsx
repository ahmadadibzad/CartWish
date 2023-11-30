import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
    return (
        <div>
            <HeroSection title="Buy iPhone 14 pro"
                subtitle="Experience the power of the latest iPhone with our most Pro camera ever."
                link="/"
                image={iphone}
            />

            <FeaturedProducts />

            <HeroSection title="Build the ultimate setup"
                subtitle="You can add Studio Display and color-matched Magic accessories to your bag after configure your Mac mini"
                link="/"
                image={mac}
            />
        </div>
    )
}

export default HomePage