-- USP_HAEMAT_GET_DOC_LIST 394
------------------------------
-- CREATED BY: GURU SINGH
-- CREATED DATE: 24-MAY-2023
------------------------------
CREATE PROCEDURE USP_HAEMAT_GET_DOC_LIST
(
    @empID INT = NULL
)
as
    set NOCOUNT on;
        select d.doctorID, d.customerCode, d.doctorName,  s.specialtyName, 
             d.cityName, st.StateName, d.hospitalName   
             from tbldoctors d
            INNER JOIN tblspecialty s on s.specialtyId = d.specialtyId and s.isActive = 0
            INNER JOIN states st on st.StateID = d.stateID  
            INNER join tblempdoc ed on ed.doctorID = d.doctorID
            where 
             d.isactive = 0
             and ed.empID = @empID

    set NOCOUNT off; 

