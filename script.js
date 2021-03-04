var size=10;
        getList();
        $("#list").on("click","a",function(){
            var title=$(this).attr("title"); //this: list안에 있는 a
            var authors=$(this).attr("authors");
            var contents=$(this).attr("contents")
            var price=$(this).attr("price");
            var image=$(this).find("img").attr("src");
            // alert(title+"\n"+authors+"\n"+contents+"\n"+price+"\n"+image);
            $("#image").attr("src", image);
            $("#title").html(title);
            $("#authors").html(authors+" ["+price+"원"+"]");
            $("#contents").html(contents);
        });
        $("#btnMore").on("click",function(){
            size+=5;
            getList();
        });
        $("#txtQuery").on("keydown",function(){
            size=10;
            getList();
        });
        function getList(){
            var query=$("#txtQuery").val();
            $.ajax({
                type: "get",
                url: url,
                dataType: "json",
                data: {"query":query, "size":size},
                headers: {"Authorization": "KakaoAK 04bb5327c41f3eb2d17d15b10ffeaea4"},
                success: function(data){
                    var temp=Handlebars.compile($("#temp").html());
                    $("#list").html(temp(data)).listview("refresh");
                }
            });
        }