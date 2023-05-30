alter procedure [USP_BSVHR_LIST_EMPLOYEES]   
       
as   
set NOCOUNT on;  
    BEGIN  
        select empnumber, designation, firstName, email, mobileNumber, zoneName, StateName ,hqcode as hocode, hqname, regionName,   
        convert(nvarchar(20), doj, 106) as doj,  
        case   
            when e.isActive = 0 then 'Yes'  
            else 'No'  
            end  as isDisabled, empId, comments, Division from employee e  
        INNER join tblzone z on e.zoneid = z.zoneID   
        inner join states s on s.stateID = e.stateID  
         where e.isActive = 0 -- ajay uncommented on 20-04-2023 
    END  
set NOCOUNT off; 

-- select * from employee where Division <> 'CRITIBIZZ'
-- update  employee set stateID = 14  where Division = 'SERAVACC'



select * from MedicineUsage where medid = 20

select * from tblHospitalActuals where medid = 20 and qty = 48
select * from Medicine
