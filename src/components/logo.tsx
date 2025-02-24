import { scrollToElement } from '@/utils';

const Logo = () => (
    <div className="relative grow-0 shrink-0 basis-12 h-12 w-12 md:h-16 md:w-16 group md:basis-16 transition-all duration-400">
        <a
            onClick={() => scrollToElement('top')}
            className="flex items-center justify-center w-full h-full text-primary cursor-pointer">
            <span className="-z-2 relative font-bold text-sm md:text-base transition-all duration-400">CVE</span>
            <span className="absolute inset-0 transition-transform duration-400 -z-1 border-3 border-primary group-hover:rotate-90"></span>
        </a>
    </div>
);

export default Logo;
