function prevedba

podrocje=cd;
datoteke=dir(fullfile(podrocje,'*.htm'));

for ind=1: size(datoteke,1)

    fid=fopen(datoteke(ind).name);
    fid2=fopen(['pretvorba\',datoteke(ind).name],'w+');

    vrstica=1;
    while 1 %neskonèna zanka za branje vrstic

        tline = fgetl(fid);
        if ~ischar(tline),   break,   end %èe je datoteke konec, konèamo

        ali_glava=strfind(tline,'</head>');
        if ali_glava %na zaèetek dodamo jvascript funkcijo
            fprintf(fid2,'<script language="javascript" type="text/javascript">  \n');
            fprintf(fid2,'function redirect(URL) \n');
            fprintf(fid2,'{       document.location=URL;  \n');
            fprintf(fid2,'		return false;    \n');
            fprintf(fid2,'}   \n');
            fprintf(fid2,'</script> \n');
        end

        ali_link=strfind(tline,'<a href=');
        if ali_link %èe je link ga spremenimo
            ali_konec=strfind(tline(ali_link:end),'>');
            if ali_konec
                ind_naslova=strfind(tline(ali_link:end),'"');
                naslov=tline(ali_link+ind_naslova(1):ali_link+ind_naslova(2)-2 );
                ali_stil=strfind(tline(ali_link:end),'class');
 
                if strcmp(naslov,'mailto:vanjadujc@volja.net')==0
                   % disp(naslov)
                    %fprintf(fid2,'%s',tline(ali_link:ali_link+ali_konec(1)-1 ));
                    fprintf(fid2,'%s',tline(1:ali_link-1));
                    fprintf(fid2,' <a href="http://www.vanjadujc.net" '); 
                    if ali_stil
                       ind_stila=strfind(tline(ali_link+ali_stil(1):end),'"');
                       naslov_stila=tline(ali_link+ali_stil(1)+ind_stila(1)-1:ali_link+ali_stil(1)+ind_stila(2)-1 );
                       fprintf(fid2,'class=');
                       fprintf(fid2,'%s',naslov_stila);
                    end
                    fprintf(fid2,'onclick="return redirect('' ');
                    fprintf(fid2,'%s',naslov);
                    fprintf(fid2,' '');"> ');
                    fprintf(fid2,'%s \n',tline(ali_link+ali_konec(1):end ));
                end
            else
                disp( fprintf('Težava link v vrstici:  %i je èez veè vrstic', vrstica ));
            end
        else %èe ni prepišemo celo vrstico
            fprintf(fid2,'%s \n',tline);
        end
        vrstica=vrstica+1;
        %disp(tline)
    end
    fclose(fid);
    fclose(fid2);


end
