AOS.init();
alert("اینجا صرفا جنبه آموزش طراحی وب داره");

const creatOdometer = (el, value) => {
    const odometer = new Odometer ({
        el: el,
        value : 0,
    });
    
    let hasRun = false;
     
    const options = {
        thereshold: [0, 0.9],
    };
    
    const callback = (entires, observer) => {
        entires.forEach((entry) => {
            if (entry.isIntersecting){
                if (!hasRun){
                    odometer.update(value);
                    hasRun= true;
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options );
    observer.observe(el);
    
};

const Top100 = document.querySelector(".top100");
creatOdometer(Top100 , 4.3);

const Hp = document.querySelector(".HP");
creatOdometer(Hp , 305);

const Topspeed = document.querySelector(".topspeed");
creatOdometer(Topspeed , 123);
