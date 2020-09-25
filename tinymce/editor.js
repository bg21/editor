tinymce.init({
    selector:'.editor', 
    language: 'pt_BR',
    insertdatetime_formats: ["%H:%M:%S", "%d-%m-%Y"],
    template_cdate_format: '[Data de criação (CDATE): %d/%m/%Y : %H:%M:%S]',
    template_mdate_format: '[Data de modificação (MDATE): %d/%m/%Y : %H:%M:%S]',
    image_class_list: [
        {title: 'lazyload', value: 'lazyload'},
    ],
    plugins: [
     "paste advlist link image lists preview hr anchor pagebreak",
     "searchreplace visualchars code codesample fullscreen insertdatetime",
     "save table contextmenu directionality emoticons paste textcolor image link media importcss wordcount imagetools textpattern"
    ],
    menubar: 'file edit view insert format tools table help',
    codesample_languages: [
		{text: 'HTML/XML', value: 'markup'},
		{text: 'JavaScript', value: 'javascript'},
		{text: 'CSS', value: 'css'},
		{text: 'PHP', value: 'php'},
		{text: 'Ruby', value: 'ruby'},
		{text: 'Python', value: 'python'},
		{text: 'Java', value: 'java'},
		{text: 'C', value: 'c'},
		{text: 'C#', value: 'csharp'},
		{text: 'C++', value: 'cpp'}
    ],
    
    toolbar: "undo redo | bold italic underline strikethrough | code fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",    

});
