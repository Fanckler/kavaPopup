class kavaPopup {
	//conctructor
	constructor (settings)
	{
		this.title = settings.title || '';
		this.message = settings.message || '';
		this.animation = settings.animation || 'fadeUp';
		this.escape = settings.escape || false;


		//create main block
		let initModal = document.createElement('div');
		initModal.id = 'kava-popup';
		initModal.className = ('kava-open');

		//create div modal window
		let popup = document.createElement('div');
		popup.id = 'kava-window';
		
		//create markup head
		let headPopup = document.createElement('div')
		headPopup.className = 'modal-window__head';
			//create title
			let headPopupTitle = document.createElement('h3');
			headPopupTitle.innerText = this.title ;
			//create close button
			let headPopupBtnClose = document.createElement('div');
			headPopupBtnClose.id = 'close';
			headPopupBtnClose.className = 'button-close';
			let iconClose = document.createElement('span');
			

		//create markup body
		let bodyPopup = document.createElement('div')
		bodyPopup.className = 'modal-window__body';
		bodyPopup.innerHTML = this.message;
		//create markup footer
		let footerPopup = document.createElement('div')
		footerPopup.className = 'modal-window__footer';


		//paste this elements for document 
		document.body.appendChild(initModal);
		initModal.appendChild(popup);
			popup.appendChild(headPopup);
				headPopup.appendChild(headPopupTitle);
				headPopup.appendChild(headPopupBtnClose);
					headPopupBtnClose.appendChild(iconClose);
			popup.appendChild(bodyPopup);
			popup.appendChild(footerPopup);

		this.popupSelector = popup;
		this.idBtn = headPopupBtnClose.id;
		this.mainForm = initModal;

		this.showPopup();
	} 

	static _clickButtonClose($this)
	{
		let idButton = $this.idBtn;
		let idMainForm = $this.mainForm;

		document.getElementById(idButton).addEventListener('click', function(){
			idMainForm.remove();
			document.body.classList.remove('modal-open');
		})

	}

	static _clickBodyClose($this)
	{
		let idMainForm = $this.mainForm;

		idMainForm.addEventListener('click', (e)=>
		{
			let target = e.target;
			if (target.id === idMainForm.id) 
			{
				idMainForm.remove();
				document.body.classList.remove('modal-open');
			} 
			else{
				return false;
			}
		}) 
	}

	static _escapeCloseButton($this)
	{
		let idMainForm = $this.mainForm;
		if($this.escape == true){
			document.body.addEventListener('keydown', function(e){
				if(e.code == 'Escape'){
					idMainForm.remove();
					document.body.classList.remove('modal-open');
				}else{
					return false;
				}
			})
		}else{
			return false;
		}
	}


	closePopup() //static function close popup
	{
			kavaPopup._clickButtonClose(this)
			kavaPopup._clickBodyClose(this)
			kavaPopup._escapeCloseButton(this)
	
			// this.escape == true ? document.body.addEventListener('keydown', (e)=> e.code === 'Escape' ? close() : false) : false; //click escape
		
	}

	showPopup() //function show popup
	{
		let popupActiveSelector = this.popupSelector;
		let animationClass = this.animation;
		document.body.className = 'modal-open'; // hidden body scroll
		animationClass == animationClass ? popupActiveSelector.classList.add('parent'+animationClass) : false; //add animation class

		setTimeout(() => { // add class animation after 100ms
			popupActiveSelector.classList.add(animationClass);
		}, 100);
	
		this.closePopup(); // call function close popup
	}

}